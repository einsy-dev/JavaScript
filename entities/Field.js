export default class Field {
	constructor(ctx, padding) {
		this.ctx = ctx
		this.padding = padding || 0
	}
	lineDash(value) {
		--value;
		this.ctx.save();
		this.ctx.setLineDash([5, 3]);
		this.ctx.beginPath();

		this.ctx.font = "15px Arial"
		let count = value * 5;
		for (let i = this.padding; i < canvas.height - this.padding; i += (canvas.height / value - 1) - this.padding) {
			this.ctx.fillText(count + ' % ', 0, i + 5)
			this.ctx.moveTo(this.padding + 15, i);
			this.ctx.lineTo(canvas.width, i);
			this.ctx.stroke();
			count -= 5
		}
		this.ctx.font = "12px Arial"
		this.ctx.fillText('январь февраль март апрель май июнь июль август сентябрь октябрь ноябрь декабрь', this.padding -10, 195)
		this.ctx.restore();	
	}
}	