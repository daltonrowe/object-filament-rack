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
          cylinder(h = 10, r = 2.32, center = true);
        }
        cylinder(h = 10, r = 2.32, center = true);
        translate(v = [63.5, 0, 0])
        {
          cylinder(h = 10, r = 2.32, center = true);
        }
      }
    }
    translate(v = [0, 0, -3])
    {
      linear_extrude(height = 3, center = false, convexity = undef, twist = undef, slices = undef, scale = 1, $fn = 20)
      {
        polygon(points = [[-40, 37], [-127, -50], [-119, -60], [-125, -95], [75, -10], [75, 37]], paths = undef, convexity = 1);
      }
    }
    translate(v = [0, 0, -1.5])
    {
      translate(v = [0, -60, 0])
      {
        translate(v = [-50, 0, 0])
        {
          translate(v = [0, -13, 0])
          {
            translate(v = [-88, 0, 0])
            {
              difference()
              {
                cylinder(h = 3, r = 26, center = true);
                translate(v = [10, 0, 0])
                {
                  union()
                  {
                    translate(v = [0, 16.714285714285715, 0])
                    {
                      cylinder(h = 3.03, r = 2.18, center = true);
                    }
                    translate(v = [0, -16.714285714285715, 0])
                    {
                      cylinder(h = 3.03, r = 2.18, center = true);
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
  translate(v = [0, -60, 0])
  {
    translate(v = [-50, 0, 0])
    {
      translate(v = [0, -13, 0])
      {
        translate(v = [-88, 0, 0])
        {
          cylinder(h = 50, r = 13, center = true);
        }
      }
    }
  }
}
