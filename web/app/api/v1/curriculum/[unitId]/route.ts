import { NextRequest, NextResponse } from 'next/server';
import { MANABU_CURRICULUM } from '@/features/content/models/curriculum';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ unitId: string }> }
) {
  try {
    const { unitId } = await params;
    const cleanUnitStr = unitId.trim().toLowerCase();

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

    return NextResponse.json(
      {
        success: true,
        unit: {
          id: unit.id,
          number: unit.number,
          title: unit.title,
          japaneseTitle: unit.japaneseTitle,
          description: unit.description,
          icon: unit.icon,
          color: unit.color,
          totalLessons: unit.lessons.length,
          lessons: unit.lessons.map((l) => ({
            id: l.id,
            lessonNumber: l.lessonNumber || 1,
            title: l.title,
            subtitle: l.subtitle,
            vocabKeywords: l.vocabKeywords || [],
            totalExercises: l.exercises.length,
          })),
        },
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
