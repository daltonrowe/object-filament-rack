$fn = 100;
union()
{
  translate(v = [-65, 0, 0])
  {
    cylinder(h = 10, r = 4.82, center = true);
  }
  cylinder(h = 10, r = 4.82, center = true);
  translate(v = [65, 0, 0])
  {
    cylinder(h = 10, r = 4.82, center = true);
  }
}
