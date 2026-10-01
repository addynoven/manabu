const fs = require('fs');
const path = require('path');

function samplePathPoints(d, numSamples = 16) {
  const tokens = d.match(/([a-zA-Z])|([+-]?[0-9]*\.?[0-9]+(?:e[+-]?[0-9]+)?)/g);
  if (!tokens) return [];

  let curX = 0, curY = 0;
  let prevCpX = 0, prevCpY = 0;
  let curCmd = '';
  const curvePoints = [];

  let i = 0;
  while (i < tokens.length) {
    const t = tokens[i];
    if (/^[a-zA-Z]$/.test(t)) {
      curCmd = t;
      i++;
    }

    if (curCmd === 'M' || curCmd === 'm') {
      const x = parseFloat(tokens[i++]);
      const y = parseFloat(tokens[i++]);
      curX = curCmd === 'M' ? x : curX + x;
      curY = curCmd === 'M' ? y : curY + y;
      prevCpX = curX;
      prevCpY = curY;
      curvePoints.push({ x: Math.round(curX * 10) / 10, y: Math.round(curY * 10) / 10 });
    } else if (curCmd === 'C' || curCmd === 'c') {
      const x1 = parseFloat(tokens[i++]);
      const y1 = parseFloat(tokens[i++]);
      const x2 = parseFloat(tokens[i++]);
      const y2 = parseFloat(tokens[i++]);
      const x = parseFloat(tokens[i++]);
      const y = parseFloat(tokens[i++]);

      const p0 = { x: curX, y: curY };
      const p1 = curCmd === 'C' ? { x: x1, y: y1 } : { x: curX + x1, y: curY + y1 };
      const p2 = curCmd === 'C' ? { x: x2, y: y2 } : { x: curX + x2, y: curY + y2 };
      const p3 = curCmd === 'C' ? { x, y } : { x: curX + x, y: curY + y };

      const steps = 6;
      for (let s = 1; s <= steps; s++) {
        const u = s / steps;
        const u1 = 1 - u;
        const px = u1*u1*u1*p0.x + 3*u1*u1*u*p1.x + 3*u1*u*u*p2.x + u*u*u*p3.x;
        const py = u1*u1*u1*p0.y + 3*u1*u1*u*p1.y + 3*u1*u*u*p2.y + u*u*u*p3.y;
        curvePoints.push({ x: Math.round(px * 10) / 10, y: Math.round(py * 10) / 10 });
      }

      curX = p3.x;
      curY = p3.y;
      prevCpX = p2.x;
      prevCpY = p2.y;
    } else if (curCmd === 'S' || curCmd === 's') {
      const x2 = parseFloat(tokens[i++]);
      const y2 = parseFloat(tokens[i++]);
      const x = parseFloat(tokens[i++]);
      const y = parseFloat(tokens[i++]);

      const p0 = { x: curX, y: curY };
      const p1 = { x: 2 * curX - prevCpX, y: 2 * curY - prevCpY };
      const p2 = curCmd === 'S' ? { x: x2, y: y2 } : { x: curX + x2, y: curY + y2 };
      const p3 = curCmd === 'S' ? { x, y } : { x: curX + x, y: curY + y };

      const steps = 6;
      for (let s = 1; s <= steps; s++) {
        const u = s / steps;
        const u1 = 1 - u;
        const px = u1*u1*u1*p0.x + 3*u1*u1*u*p1.x + 3*u1*u*u*p2.x + u*u*u*p3.x;
        const py = u1*u1*u1*p0.y + 3*u1*u1*u*p1.y + 3*u1*u*u*p2.y + u*u*u*p3.y;
        curvePoints.push({ x: Math.round(px * 10) / 10, y: Math.round(py * 10) / 10 });
      }

      curX = p3.x;
      curY = p3.y;
      prevCpX = p2.x;
      prevCpY = p2.y;
    } else {
      i++;
    }
  }

  if (curvePoints.length <= numSamples) return curvePoints;
  const res = [];
  for (let k = 0; k < numSamples; k++) {
    const idx = Math.round((k / (numSamples - 1)) * (curvePoints.length - 1));
    res.push(curvePoints[idx]);
  }
  return res;
}

function parseKanjiVg(svg, char) {
  const pathRegex = /<path[^>]+id=\"[^\"]+-s(\d+)\"[^>]*d=\"([^\"]+)\"/g;
  const numRegex = /<text transform=\"matrix\(1 0 0 1 ([0-9\.\-]+) ([0-9\.\-]+)\)\">(\d+)<\/text>/g;

  const strokes = [];
  let match;
  while ((match = pathRegex.exec(svg)) !== null) {
    const idx = parseInt(match[1], 10);
    const d = match[2];
    const points = samplePathPoints(d, 16);
    strokes.push({
      step: idx,
      path: d,
      points,
      start: points[0] || { x: 50, y: 50 },
      end: points[points.length - 1] || { x: 50, y: 50 }
    });
  }

  const numbers = {};
  while ((match = numRegex.exec(svg)) !== null) {
    const x = parseFloat(match[1]);
    const y = parseFloat(match[2]);
    const num = parseInt(match[3], 10);
    numbers[num] = { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
  }

  strokes.forEach(s => {
    if (numbers[s.step]) {
      s.numberPos = numbers[s.step];
    } else {
      s.numberPos = {
        x: Math.round((s.start.x - 5) * 10) / 10,
        y: Math.round((s.start.y - 2) * 10) / 10
      };
    }
  });

  return {
    char,
    strokeCount: strokes.length,
    strokes
  };
}

const outDir = path.join(__dirname, '../src/features/kana/data');
fs.mkdirSync(outDir, { recursive: true });

// 1. Compile Kana (Hiragana + Katakana)
console.log('Compiling Kana...');
const hiragana = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん'.split('');
const katakana = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'.split('');
const kanaDb = {};

hiragana.forEach(c => {
  const hex = c.charCodeAt(0).toString(16).padStart(5, '0');
  const p = `/tmp/kanjivg/kanji/${hex}.svg`;
  if (fs.existsSync(p)) {
    const parsed = parseKanjiVg(fs.readFileSync(p, 'utf8'), c);
    parsed.type = 'hiragana';
    kanaDb[c] = parsed;
  }
});
katakana.forEach(c => {
  const hex = c.charCodeAt(0).toString(16).padStart(5, '0');
  const p = `/tmp/kanjivg/kanji/${hex}.svg`;
  if (fs.existsSync(p)) {
    const parsed = parseKanjiVg(fs.readFileSync(p, 'utf8'), c);
    parsed.type = 'katakana';
    kanaDb[c] = parsed;
  }
});
fs.writeFileSync(path.join(outDir, 'kanjivg_kana.json'), JSON.stringify(kanaDb));
console.log(`Saved ${Object.keys(kanaDb).length} Kana to kanjivg_kana.json`);

// 2. Compile N5 - N1 Kanji
const levels = ['N5', 'N4', 'N3', 'N2', 'N1'];
const combinedN5andKana = { ...kanaDb };

levels.forEach(lvl => {
  console.log(`Compiling ${lvl} Kanji...`);
  const kanjiList = require(`../src/features/kanji/data/${lvl}.json`);
  const lvlDb = {};
  let count = 0;

  kanjiList.forEach(k => {
    const hex = k.kanjiChar.charCodeAt(0).toString(16).padStart(5, '0');
    const p = `/tmp/kanjivg/kanji/${hex}.svg`;
    if (fs.existsSync(p)) {
      const parsed = parseKanjiVg(fs.readFileSync(p, 'utf8'), k.kanjiChar);
      parsed.type = 'kanji';
      parsed.level = lvl;
      lvlDb[k.kanjiChar] = parsed;
      count++;

      if (lvl === 'N5') {
        combinedN5andKana[k.kanjiChar] = parsed;
      }
    } else {
      console.warn(`Missing SVG for ${lvl} Kanji: ${k.kanjiChar} (${hex})`);
    }
  });

  const outFileName = `kanjivg_${lvl.toLowerCase()}.json`;
  fs.writeFileSync(path.join(outDir, outFileName), JSON.stringify(lvlDb));
  console.log(`Saved ${count} / ${kanjiList.length} ${lvl} Kanji to ${outFileName}`);
});

// 3. Save backward-compatible kanjivgData.json (Kana + N5 = 172 chars)
fs.writeFileSync(path.join(outDir, 'kanjivgData.json'), JSON.stringify(combinedN5andKana));
console.log(`Updated core kanjivgData.json with ${Object.keys(combinedN5andKana).length} characters`);
console.log('All KanjiVG datasets compiled successfully!');
