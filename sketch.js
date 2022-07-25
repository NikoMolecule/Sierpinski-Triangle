function setup() {
  createCanvas(400, 400);
}

function sierpinski_triangle(x1, y1, x2, y2, x3, y3, p, f, b) {
  if (p < 6) {
    p++;
    let m_x1 = (x1 + x2) / 2;
    let m_y1 = (y1 + y2) / 2;
    let m_x2 = (x2 + x3) / 2;
    let m_y2 = (y2 + y3) / 2;
    let m_x3 = (x1 + x3) / 2;
    let m_y3 = (y1 + y3) / 2;
    f = noise(p) * 255;
    b = noise(p + 10000) * 255;
    fill(f, 0, b);
    triangle(m_x1, m_y1, m_x2, m_y2, m_x3, m_y3);
    sierpinski_triangle(x1, y1, m_x1, m_y1, m_x3, m_y3, p, f, b);
    sierpinski_triangle(m_x1, m_y1, x2, y2, m_x2, m_y2, p, f, b);
    sierpinski_triangle(m_x3, m_y3, m_x2, m_y2, x3, y3, p, f, b);
  }
}

function draw() {
  let s = sqrt(3) / 2;
  let r = noise(1) * 255;
  let b = noise(10000) * 255;
  background(255);
  fill(r, 0, b);
  triangle(0, 400, 200, 400 - s * 400, 400, 400);
  fill(255);
  triangle(100, (400 - s * 400 + 400) / 2, 300, (400 - s * 400 + 400) / 2, 200, 400);

  sierpinski_triangle(0, 400, 100, (400 - s * 400 + 400) / 2, 200, 400, 1, r, b);
  sierpinski_triangle(100, (400 - s * 400 + 400) / 2, 200, 400 - s * 400, 300, (400 - s * 400 + 400) / 2, 1, r, b);
  sierpinski_triangle(200, 400, 300, (400 - s * 400 + 400) / 2, 400, 400, 1, r, b);
}
