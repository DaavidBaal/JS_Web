

function validaClave()
{

if (   Clave1.value=='' )
	{
	alert("Introduce la clave");
	errorValidando(document.forms.encuesta.Clave1);
	return false;
	}
else
	{
	//Actualizar(document.forms.encuesta.Clave1);
 	if ( Clave1.value != Clave2.value )
		{
		alert("Las claves no coinciden;");
		errorValidando(document.forms.encuesta.Clave2);
		return false;
		}
 	else
		{
		//Actualizar(document.forms.encuesta.Clave2);
		return true;
		}
	}
}
