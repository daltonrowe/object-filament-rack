$fn = 100;
difference()
{
  cylinder(h = 3, r = 26, center = true);
  union()
  {
    translate(v = [0, 19.5, 0])
    {
      cylinder(h = 10, r = 3, center = true);
    }
    translate(v = [0, -19.5, 0])
    {
      cylinder(h = 10, r = 3, center = true);
    }
  }
}
