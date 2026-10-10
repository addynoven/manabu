import { NextRequest, NextResponse } from 'next/server';
import { MANABU_CURRICULUM } from '@/features/content/models/curriculum';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ unitId: string; lessonId: string }> }
) {
  try {
    const { unitId, lessonId } = await params;

    const cleanUnitStr = unitId.trim().toLowerCase();
    const cleanLessonStr = lessonId.trim().toLowerCase();

    // 1. Find Unit
    const unitNum = parseInt(cleanUnitStr.replace(/\D/g, ''), 10);
    const unit = MANABU_CURRICULUM.find(
      (u) =>
        u.id.toLowerCase() === cleanUnitStr ||
        u.number === unitNum ||
        `unit_${u.number}` === cleanUnitStr ||
        `unit${u.number}` === cleanUnitStr
    );

    if (!unit) {
      return NextResponse.json(
        {
          success: false,
          error: `Unit '${unitId}' not found in curriculum`,
          availableUnits: MANABU_CURRICULUM.map((u) => u.id),
        },
        { status: 404 }
      );
    }

    // 2. Find Lesson
    const lessonNum = parseInt(cleanLessonStr.replace(/\D/g, ''), 10);
    const lesson = unit.lessons.find(
      (l, idx) =>
        l.id.toLowerCase() === cleanLessonStr ||
        l.lessonNumber === lessonNum ||
        idx + 1 === lessonNum ||
        `u${unit.number}_l${lessonNum}` === cleanLessonStr ||
        `lesson${lessonNum}` === cleanLessonStr ||
        `l${lessonNum}` === cleanLessonStr
    );

    if (!lesson) {
      return NextResponse.json(
        {
          success: false,
          error: `Lesson '${lessonId}' not found in Unit ${unit.number}`,
          availableLessons: unit.lessons.map((l) => ({
            id: l.id,
            number: l.lessonNumber || 1,
            title: l.title,
          })),
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        unit: {
          id: unit.id,
          number: unit.number,
          title: unit.title,
          japaneseTitle: unit.japaneseTitle,
        },
        lesson: {
          id: lesson.id,
          lessonNumber: lesson.lessonNumber || 1,
          title: lesson.title,
          subtitle: lesson.subtitle,
          vocabKeywords: lesson.vocabKeywords || [],
          totalExercises: lesson.exercises.length,
        },
        exercises: lesson.exercises.map((ex) => ({
          id: ex.id,
          type: ex.type,
          prompt: ex.prompt,
          subPrompt: ex.subPrompt,
          character: ex.character,
          correctAnswer: ex.correctAnswer,
          options: ex.options,
          explanation: ex.explanation,
          matchPairs: ex.matchPairs,
          wordTiles: ex.wordTiles,
        })),
      },
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
        },
      }
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal Server Error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
