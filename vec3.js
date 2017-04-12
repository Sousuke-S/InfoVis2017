Vec3 = function( x, y, z )
{
    this.x = x;
    this.y = y;
    this.z = z;
}

Vec3.prototype.add = function( v )
{
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
}

Vec3.prototype.sum = function()
{
    return this.x + this.y + this.z;
}

Vec3.prototype.min = function()
{
    var min;
    if(this.x >= this.y)
    {
	min = this.y;
    }
    else
    {
	min = this.x;
    }
    if(min >= this.z)
    {
	return this.z;
    }
    return min;
}

Vec3.prototype.max = function()
{
    var max;
    if(this.x >= this.y)
    {
	max = this.x;
    }
    else
    {
	max = this.y;
    }
    if(this.z >= max)
    {
	return this.z;
    }
    return max;
}

Vec3.prototype.mid = function()
{
    var mid;
    if(this.x >= this.y)
    {
	mid = this.x;
    }
    else
    {
	mid = this.y;
    }
    if(mid >= this.z)
    {
	return this.z;
    }
    return mid;
}

Vec3.prototype.AreaOfTriangle = function( v0, v1, v2 )
{
    var vx1 = v1.x - v0.x, vy1 = v1.y - v0.y, vz1 = v1.z - v0.z;
    var vx2 = v2.x - v0.x, vy2 = v2.y - v0.y, vz2 = v2.z - v0.z;
    var vx3 = vy1*vz2 - vz1*vy2, vy3 = vz1*vx2 - vx1*vz2, vz3 = vx1*vy2 - vy1*vx2;
   // return 0;
    return Math.sqrt(vx3*vx3+vy3*vy3+vz3*vz3)/2;
}
