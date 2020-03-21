function calc1Folds(calc){
	var count = 0;
	for(var i = 0; i < calc.length; i++){
		count = parseFloat(count + parseFloat(calc[i]));
	}
	return(count.toFixed(2));
}
function calc2Folds(calc){
	var count = 0;
	for(var t = 0; t < parseInt(calc.length - 1); t++){
		for(var i = parseInt(t + 1); i < calc.length; i++){
			count = parseFloat(count + parseFloat(calc[t] * calc[i]));
		}
	}
	return(count.toFixed(2));
}
function calc3Folds(calc){
	var count = 0;
	for(var i = 0; i < parseInt(calc.length - 1); i++){
		for(var t = parseInt(i + 1); t < calc.length; t++){
			for(var r = parseInt(t + 1); r < calc.length; r++){
				count = parseFloat(count + parseFloat(calc[i] * parseFloat(calc[t] * calc[r])));
			}
		}
	}
	return(count.toFixed(2));
}
function calc4Folds(calc){
	var count = 0;
	for(var r = 0; r < parseInt(calc.length - 1); r++){
		for(var t = parseInt(r + 1); t < calc.length; t++){
			for(var i = parseInt(t + 1); i < calc.length; i++){
				for(var u = parseInt(i + 1); u < calc.length; u++){
					count = parseFloat(count + parseFloat(calc[r] * parseFloat(calc[t] * parseFloat(calc[i] * calc[u]))));
				}
			}
		}
	}
	return(count.toFixed(2));
}
function calc5Folds(calc){
	var count = 0;
	for(var u = 0; u < parseInt(calc.length - 1); u++){
		for(var t = parseInt(u + 1); t < calc.length; t++){
			for(var i = parseInt(t + 1); i < calc.length; i++){
				for(var r = parseInt(i + 1); r < calc.length; r++){
					for(var f = parseInt(r + 1); f < calc.length; f++){
						count = parseFloat(count + parseFloat(calc[u] * parseFloat(calc[t] * parseFloat(calc[i] * parseFloat(calc[r] * calc[f])))));
					}
				}
			}
		}
	}
	return(count.toFixed(2));
}
function calc6Folds(calc){
	var count = 0;
	for(var f = 0; f < parseInt(calc.length - 1); f++){
		for(var t = f + 1; t < calc.length; t++){
			for(var i = parseInt(t + 1); i < calc.length; i++){
				for(var r = parseInt(i + 1); r < calc.length; r++){
					for(var u = r + 1; u < calc.length; u++){
						for(var e = u + 1; e < calc.length; e++){
							count = parseFloat(count + parseFloat(calc[f] * parseFloat(calc[t] * parseFloat(calc[i] * parseFloat(calc[r] * parseFloat(calc[u] * calc[e]))))));
						}
					}
				}
			}
		}
	}
	return(count.toFixed(2));
}
function calc7Folds(calc){
	var count = 0;
	for(var e = 0; e < parseInt(calc.length - 1); e++){
		for(var t = e + 1; t < calc.length; t++){
			for(var i = parseInt(t + 1); i < calc.length; i++){
				for(var r = parseInt(i + 1); r < calc.length; r++){
					for(var u = r + 1; u < calc.length; u++){
						for(var f = u + 1; f < calc.length; f++){
							for(var o = f + 1; o < calc.length; o++){
								count = parseFloat(count + parseFloat(calc[e]) * parseFloat(calc[t] * parseFloat(calc[i]) * parseFloat(calc[r] * parseFloat(calc[u] * parseFloat(calc[f] * calc[o])))));
							}
						}
					}
				}
			}
		}
	}
	return(count.toFixed(2));
}
function calc8Folds(calc){
	var count = 0;
	for(var o = 0; o < parseInt(calc.length - 1); o++){
		for(var t = parseInt(o + 1); t < calc.length; t++){
			for(var i = parseInt(t + 1); i < calc.length; i++){
				for(var r = parseInt(i + 1); r < calc.length; r++){
					for(var u = parseInt(r + 1); u < calc.length; u++){
						for(var f = parseInt(u + 1); f < calc.length; f++){
							for(var e = parseInt(f + 1); e < calc.length; e++){
								for(var s = parseInt(e + 1); s < calc.length; s++){
									count = parseFloat(count + parseFloat(calc[o] * parseFloat(calc[t] * parseFloat(calc[i] * parseFloat(calc[r] * parseFloat(calc[u] * parseFloat(calc[f] * parseFloat(calc[e] * calc[s]))))))));
								}
							}
						}
					}
				}
			}
		}
	}
	return(count.toFixed(2));
}