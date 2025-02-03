$fn = 100;
difference()
{
  union()
  {
    translate(v = [0, 0, 5])
    {
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
    }
    translate(v = [0, 0, -6])
    {
      linear_extrude(height = 6, center = false, convexity = undef, twist = undef, slices = undef, scale = 1, $fn = 20)
      {
        polygon(points = [[-40, 37], [-105, -50], [-91, -50], [-85, -80], [75, -20], [75, 37]], paths = undef, convexity = 1);
      }
    }
    translate(v = [0, 0, -3])
    {
      translate(v = [0, -60, 0])
      {
        translate(v = [-15, 0, 0])
        {
          translate(v = [0, -13, 0])
          {
            translate(v = [-88, 0, 0])
            {
              difference()
              {
                cylinder(h = 6, r = 26, center = true);
                translate(v = [10, 0, 0])
                {
                  union()
                  {
                    translate(v = [0, 16.714285714285715, 0])
                    {
                      cylinder(h = 6.03, r = 2.2, center = true);
                    }
                    translate(v = [0, -16.714285714285715, 0])
                    {
                      cylinder(h = 6.03, r = 2.2, center = true);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
