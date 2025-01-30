$fn = 100;
difference()
{
  union()
  {
    cylinder(h = 20, r = 26, center = true);
    translate(v = [0, 0, 11.515])
    {
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
    }
  }
  cylinder(h = 50, r = 13, center = true);
  translate(v = [-17, 0, 0])
  {
    cube(size = [26, 70, 20.03], center = true);
  }
}
