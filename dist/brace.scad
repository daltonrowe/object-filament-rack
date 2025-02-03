$fn = 100;
linear_extrude(height = 3, center = false, convexity = undef, twist = undef, slices = undef, scale = 1, $fn = 20)
{
  polygon(points = [[-40, 37], [-115, -50], [-101, -50], [-95, -80], [75, -20], [75, 37]], paths = undef, convexity = 1);
}
