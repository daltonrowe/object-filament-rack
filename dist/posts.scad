$fn = 100;
union()
{
  translate(v = [-63.5, 0, 0])
  {
    cylinder(h = 10, r = 2.3, center = true);
  }
  cylinder(h = 10, r = 2.3, center = true);
  translate(v = [63.5, 0, 0])
  {
    cylinder(h = 10, r = 2.3, center = true);
  }
}
