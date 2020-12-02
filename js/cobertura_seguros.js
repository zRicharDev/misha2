$(document).ready(function(){

	$('.seguros').click(function(){
		var msjmod = '<div class="modal2_wrap">'+
								'<div class="mensaje2_modal">'+
									'<h1>Contamos con 4 tipos de seguros:</h1><p><h3>Seguro de responsabilidad civil extracontractual-materiales peligrosos:</h3>Esta indemnizará los gastos ocasionados por los daños personales, materiales y ambientales derivados de los efectos de un accidente generado por la carga y ocurrido durante una operación de transporte terrestre de materiales y/o residuos peligrosos durante la vigencia de esta póliza, dentro del territorio del Perú</p>'+
									'<br><p><h3>Seguro de transporte terrestre nacional:</h3>Este seguro ampara los despachos de mercancías, efectuados por el asegurado o por terceros responsables por vía terrestre, contra pérdida o daño material de los bienes asegurados, causados directa y accidentalmente por riesgos que sufra el vehículo transportador dentro del territorio nacional</p>'+
									'<br><p><h3>Seguro de deshonestidad, desaparición y destrucción:</h3>Este seguro cubre las pérdidas causadas por actos deshonestos que tus trabajadores cometan como robo sistemático, fraude, etc. Cubre también los daños o pérdidas dentro de tu  local a consecuencia de un robo, asalto o intento de robo. Todos tus bienes estarán asegurados, así como también, el dinero dentro del local, dinero en tránsito a los bancos y el dinero en poder de los cobradores o vendedores. Se cubre también la falsificación de documentos bancarios tales como cheques, giros, letras de cambio, etc.</p>'+
									'<br><p><h3>Seguro de responsabilidad civil vehicular:</h3>Con este seguro de transporte de carga, se indemnizan los daños materiales sufridos por el vehículo, sus piezas o partes y sus accesorios como consecuencia de volcamiento o colisión accidental con objetos en movimiento o estaciones, incendio, rayo o explosión.</p>'+
									'<span id="btnClose">Ok</span>'+
									'</div>'+
								'</div>'
			$('body').append(msjmod);

			$('#btnClose').click(function(){
			$('.modal2_wrap').remove();
		})
	});
});