particlesJS("particles-js", {
	"particles": {
		"number": {
			"value": 346,//ãã?æ°å¤ãå¤æ´ããã¨æã?æ°ãå¢æ¸ã§ãã
			"density": {
				"enable": true,
				"value_area": 800
			}
		},
		"color": {
			"value": "#ffffff"
		},
		"shape": {
			"type": "circle",//å½¢ç¶ã¯circleãæå®?
			"stroke": {
				"width": 0
			},
		},
		"opacity": {
			"value": 1,//ã·ã§ã¤ãã?éæ?åº¦
			"random": true,//ã·ã§ã¤ãã?éæ?åº¦ãã©ã³ãã?ã«ãã
			"anim": {
				"enable": true,//ã·ã§ã¤ãã?éæ?åº¦ãã¢ãã¡ã¼ã·ã§ã³ããã?
				"speed": 3,//ã·ã§ã¤ãã?éæ?åº¦ãã¢ãã¡ã¼ã·ã§ã³ããã?
				"opacity_min": 0,//éæ?åº¦ã®æå°å¤??
				"sync": false//å¨ã¦ãåæã«ã¢ãã¡ã¼ã·ã§ã³ãããªã?
			}
		},
		"size": {
			"value": 2,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 4,
				"size_min": 0.3,
				"sync": false
			}
		},
		"line_linked": {
			"enable": false,
		},
		"move": {
			"enable": true,
			"speed": 120,//ãã?æ°å¤ãå°ããããã¨ã?£ãããªåãã«ãªã?
			"direction": "none",//æ¹åæå®ãªã?
			"random": true,//åãã¯ã©ã³ãã?ã«
			"straight": true,//åããã¨ã©ãã
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 600
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": false,
			},
			"onclick": {
				"enable": false,
			},
			"resize": true
		}
	},
	"retina_detect": true
});