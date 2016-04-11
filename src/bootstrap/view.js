export class BootstrapUI {
  progress;

  constructor() {
	this.progress = 0;
  }

  attached() {
	$('.ladda-button')
	.ladda('bind', {timeout: 2000});
	$('.ladda-prog-button')
	.ladda('bind', {
	  timeout: 5000, callback: (ld)=> {
		var x = 0;
		var i = setInterval(()=>ld.setProgress((x += 10) / 100), 500);
		setTimeout(()=>clearInterval(i), 5000)
	  }
	});

	setInterval(()=> {
	  if (this.progress == 100) this.progress = 0;
	  else this.progress+=10;
	}, 1000);
  }
}
