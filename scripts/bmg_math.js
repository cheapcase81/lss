function vEase(k, kCurve)
{
	// @author Robert Penner / http://www.robertpenner.com/easing_terms_of_use.html
	// converted to index per standard BMG vectors IDs, returns normalized value from normalized input
	switch(kCurve)
	{
		// linear
		//----------------------------------------------
				case  0: return 1;
		break;	case  1: return k;
				
		// quadratic
		//----------------------------------------------
		break;	case 21: return k * k;
		break;	case 22: return k * ( 2 - k );
		break;	case 23: 
			if ( ( k *= 2 ) < 1 ) return 0.5 * k * k;
			return - 0.5 * ( --k * ( k - 2 ) - 1 );
		
		// cubic
		//----------------------------------------------
		break;	case 31: return k * k * k;
		break;	case 32: return --k * k * k + 1;
		break;	case 33: 
			if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k;
			return 0.5 * ( ( k -= 2 ) * k * k + 2 );
			
		// quartic
		//----------------------------------------------
		break;	case 141: return k * k * k * k;
		break;	case 142: return 1 - --k * k * k * k;
		break;	case 143: 
			if ( ( k *= 2 ) < 1) return 0.5 * k * k * k * k;
			return - 0.5 * ( ( k -= 2 ) * k * k * k - 2 );
			
		// quintic
		//----------------------------------------------
		break;	case 151: return k * k * k * k * k;
		break;	case 152: return --k * k * k * k * k + 1;
		break;	case 153: 
			if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k * k * k;
			return 0.5 * ( ( k -= 2 ) * k * k * k * k + 2 );
			
		// Sinusoidal
		//----------------------------------------------
		break;	case 161: return 1 - Math.cos( k * Math.PI / 2 );
		break;	case 162: return Math.sin( k * Math.PI / 2 );
		break;	case 163: return 0.5 * ( 1 - Math.cos( Math.PI * k ) );
		
		// Exponential
		//----------------------------------------------
		break;	case 171: return k === 0 ? 0 : Math.pow( 1024, k - 1 );
		break;	case 172: return k === 1 ? 1 : 1 - Math.pow( 2, - 10 * k );
		break;	case 173: 
			if ( k === 0 ) return 0;
			if ( k === 1 ) return 1;
			if ( ( k *= 2 ) < 1 ) return 0.5 * Math.pow( 1024, k - 1 );
			return 0.5 * ( - Math.pow( 2, - 10 * ( k - 1 ) ) + 2 );
		
		// Circular
		//----------------------------------------------
		break;	case 181: return 1 - Math.sqrt( 1 - k * k );
		break;	case 182: return Math.sqrt( 1 - --k * k );
		break;	case 183: 
			if ( ( k *= 2 ) < 1) return - 0.5 * ( Math.sqrt( 1 - k * k) - 1);
			return 0.5 * ( Math.sqrt( 1 - ( k -= 2) * k) + 1);
			
		// Elastic
		//----------------------------------------------
		break;	case 41: 
			var s, a = 0.1, p = 0.4;
			if ( k === 0 ) return 0;
			if ( k === 1 ) return 1;
			if ( !a || a < 1 ) { a = 1; s = p / 4; }
			else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
			return - ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );
		break;	case 42:
			var s, a = 0.1, p = 0.4;
			if ( k === 0 ) return 0;
			if ( k === 1 ) return 1;
			if ( !a || a < 1 ) { a = 1; s = p / 4; }
			else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
			return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );
		break;	case 43:
			var s, a = 0.1, p = 0.4;
			if ( k === 0 ) return 0;
			if ( k === 1 ) return 1;
			if ( !a || a < 1 ) { a = 1; s = p / 4; }
			else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
			if ( ( k *= 2 ) < 1 ) return - 0.5 * ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );
			return a * Math.pow( 2, -10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) * 0.5 + 1;
			
		// Back
		//----------------------------------------------
		break;	case 51: 
			var s = 1.70158;
			return k * k * ( ( s + 1 ) * k - s );
		break;	case 52:
			var s = 1.70158;
			return --k * k * ( ( s + 1 ) * k + s ) + 1;
		break;	case 53:
			var s = 1.70158 * 1.525;
			if ( ( k *= 2 ) < 1 ) return 0.5 * ( k * k * ( ( s + 1 ) * k - s ) );
			return 0.5 * ( ( k -= 2 ) * k * ( ( s + 1 ) * k + s ) + 2 );
			
		// Bounce
		//----------------------------------------------
		break;	case 61: return 1 - vEase(1 - k, 62);
		break;	case 62:
			if ( k < ( 1 / 2.75 ) ) {
				return 7.5625 * k * k;
			} else if ( k < ( 2 / 2.75 ) ) {
				return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
			} else if ( k < ( 2.5 / 2.75 ) ) {
				return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
			} else {
				return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
			}
		break;	case 63:
			if ( k < 0.5 ) return vEase( k * 2, 61) * 0.5;
			return vEase( k * 2 - 1, 62) * 0.5 + 0.5;
		break;
	}
};