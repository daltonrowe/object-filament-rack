$fn = 100;
translate(v = [10, 0, 0])
{
  union()
  {
    translate(v = [0, 16.714285714285715, 0])
    {
      cylinder(h = 3.03, r = 2, center = true);
    }
    translate(v = [0, -16.714285714285715, 0])
    {
      cylinder(h = 3.03, r = 2, center = true);
    }
  }
}
