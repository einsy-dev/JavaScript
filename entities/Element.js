export default class Element {
	constructor(ctx, padding) {
		this.ctx = ctx
		this.padding = padding || 0
	}

	Point(x, y, color = '#0E1079') {
		x -= this.padding;
		y -= this.padding;
		this.ctx.save();
		this.ctx.fillStyle = color;
		this.ctx.beginPath();
		this.ctx.arc(x, y, 4, 0, 2 * Math.PI);
		this.ctx.fill();
		this.ctx.restore();
	}

	Line(x1, y1, x2, y2, color = '#0E1079') {
		x1 -= this.padding;
		y1 -= this.padding;
		x2 -= this.padding;
		y2 -= this.padding;
		this.ctx.save();
		this.ctx.strokeStyle = color;
		this.ctx.beginPath();
		this.ctx.moveTo(x1, y1);
		this.ctx.lineTo(x2, y2);
		this.ctx.stroke();
		this.ctx.restore();
	}
}