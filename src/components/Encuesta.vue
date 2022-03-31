<template>

    <div id="encuesta">
        <div class="main_content container" id="curso">
            <cuestionario-description msgCuestionario="Encuesta sobre el curso de filosofía de la ciencia"/>
            <div class="main_instructions mb-5">
                <p>
                    Estimados colegas, el siguiente instrumento forma parte de un proyecto que pretende indagar sobre el impacto de la filosofía de la ciencia en la física educativa. En este sentido, se solicita su colaboración para describir los alcances que ha tenido el curso de filosofía de la ciencia, en su formación y, si es el caso, en sus investigaciones. 
                    ¡Agradecemos su entusiasta y valiosa participación!

                </p>
            </div>
            <form class="row g-3" @submit.prevent="guardarRespuestas">
                <div class="col-md-6">
                    <p>Línea de investigación</p>
                    <div>
                        <input type="text" class="form-control" id="linea-investigacion" v-model="respuestas.lineaInvestigacion">
                    </div>
                </div>
                <div class="col-md-6">
                    <p>País</p>
                    <div>
                        <input type="text" class="form-control" id="linea-investigacion" v-model="respuestas.pais">
                    </div>
                </div>
                <div class="col-md-6">
                    <p>Nivel de estudios:</p>
                    <div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="nivelEstudios" id="licenciatura" checked v-model="respuestas.nivelEstudios" value="1">
                            <label class="form-check-label" for="licenciatura">
                                Licenciatura
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="nivelEstudios" id="maestria" v-model="respuestas.nivelEstudios" value="2">
                            <label class="form-check-label" for="maestria">
                                Maestría
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="nivelEstudios" id="doctorado" v-model="respuestas.nivelEstudios" value="3">
                            <label class="form-check-label" for="doctorado">
                                Doctorado
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="nivelEstudios" id="posdoctorado" v-model="respuestas.nivelEstudios" value="4">
                            <label class="form-check-label" for="posdoctorado">
                                Posdcotorado
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <p>Años de experiencia en la investigación educativa</p>
                    <div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="experiencia" id="a" checked v-model="respuestas.experiencia" value="1">
                            <label class="form-check-label" for="a">
                                De 1 a 5
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="experiencia" id="b" v-model="respuestas.experiencia" value="2">
                            <label class="form-check-label" for="b">
                                De 6 a 11
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="experiencia" id="c" v-model="respuestas.experiencia" value="3">
                            <label class="form-check-label" for="c">
                                De 12 a 20
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="experiencia" id="d" v-model="respuestas.experiencia" value="4">
                            <label class="form-check-label" for="d">
                                De 21 a 30
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="experiencia" id="e" v-model="respuestas.experiencia" value="5">
                            <label class="form-check-label" for="e">
                                Más de 30
                            </label>
                        </div>
                    </div>
                </div>
                <!--  -->
                <div class="col-md-6">
                    <p>1.	El curso de filosofía de la ciencia que cursaste, consideras que cumplió su propósito, es decir, vincular los temas de tu proyecto de tesis bajo una perspectiva filosófica, identificar nuevos enfoques para atacar problemas educativos, a la vez de llevar a cabo una reflexión sobre aspectos fundamentales de la física, y revitalizar los aspectos ontológicos, metodológicos, epistemológicos, axiológicos, sociales e históricos de la física, además de potencializar tus actitudes críticas.</p>
                    <div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta1" id="1-a" checked v-model="respuestas.respuesta1" value="1">
                            <label class="form-check-label" for="1-a">
                                Totalmente de acuerdo
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta1" id="1-b" v-model="respuestas.respuesta1" value="2">
                            <label class="form-check-label" for="1-b">
                                De acuerdo
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta1" id="1-c" v-model="respuestas.respuesta1" value="3">
                            <label class="form-check-label" for="1-c">
                                Ni de acuerdo ni en desacuerdo
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta1" id="1-d" v-model="respuestas.respuesta1" value="4">
                            <label class="form-check-label" for="1-d">
                                En desacuerdo
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta1" id="1-e" v-model="respuestas.respuesta1" value="5">
                            <label class="form-check-label" for="1-e">
                                Totalmente en desacuerdo
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <p>2.	Consideras que el curso de filosofía de la ciencia contribuye a la reflexión docente para mejorar tu práctica, hacer introspección y sufragar, en cierto sentido, la disminución del fracaso escolar, relacionado con el aprendizaje de la física.</p>
                    <div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta2" id="2-a" checked v-model="respuestas.respuesta2" value="1">
                            <label class="form-check-label" for="2-a">
                                Totalmente de acuerdo
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta2" id="2-b" v-model="respuestas.respuesta2" value="2">
                            <label class="form-check-label" for="2-b">
                                De acuerdo
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta2" id="2-c" v-model="respuestas.respuesta2" value="3">
                            <label class="form-check-label" for="2-c">
                                Ni de acuerdo ni en desacuerdo
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta2" id="2-d" v-model="respuestas.respuesta2" value="4">
                            <label class="form-check-label" for="2-d">
                                En desacuerdo
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta2" id="2-e" v-model="respuestas.respuesta2" value="5">
                            <label class="form-check-label" for="2-e">
                                Totalmente en desacuerdo
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <p>3.	Consideras que la dificultad de la interacción entre la filosofía de la ciencia y la ciencia (en especial la física), se debe a la escaza inclusión de la primera, en los currículos de las carreras científicas. </p>
                    <div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta3" id="3-a" checked v-model="respuestas.respuesta3" value="1">
                            <label class="form-check-label" for="3-a">
                                Totalmente de acuerdo
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta3" id="3-b" v-model="respuestas.respuesta3" value="2">
                            <label class="form-check-label" for="3-b">
                                De acuerdo
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta3" id="3-c" v-model="respuestas.respuesta3" value="3">
                            <label class="form-check-label" for="3-c">
                                Ni de acuerdo ni en desacuerdo
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta3" id="3-d" v-model="respuestas.respuesta3" value="4">
                            <label class="form-check-label" for="3-d">
                                En desacuerdo
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta3" id="3-e" v-model="respuestas.respuesta3" value="5">
                            <label class="form-check-label" for="3-e">
                                Totalmente en desacuerdo
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <p>4.	Durante el curso de filosofía de la ciencia, consideras que hubo reflexión e intercambio de ideas, así como una discusión cooperativa entre los participantes: </p>
                    <div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta4" id="4-a" checked v-model="respuestas.respuesta4" value="1">
                            <label class="form-check-label" for="4-a">
                                Totalmente de acuerdo
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta4" id="4-b" v-model="respuestas.respuesta4" value="2">
                            <label class="form-check-label" for="4-b">
                                De acuerdo
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta4" id="4-c" v-model="respuestas.respuesta4" value="3">
                            <label class="form-check-label" for="4-c">
                                Ni de acuerdo ni en desacuerdo
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta4" id="4-d" v-model="respuestas.respuesta4" value="4">
                            <label class="form-check-label" for="4-d">
                                En desacuerdo
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta4" id="4-e" v-model="respuestas.respuesta4" value="5">
                            <label class="form-check-label" for="4-e">
                                Totalmente en desacuerdo
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <p>5.	Tienes interés por la comprensión, interpretación, apropiación y uso de los resultados de tu investigación en física educativa, desde un enfoque filosófico:</p>
                    <div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta5" id="5-a" checked v-model="respuestas.respuesta5" value="1">
                            <label class="form-check-label" for="5-a">
                                Totalmente de acuerdo
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta5" id="5-b" v-model="respuestas.respuesta5" value="2">
                            <label class="form-check-label" for="5-b">
                                De acuerdo
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta5" id="5-c" v-model="respuestas.respuesta5" value="3">
                            <label class="form-check-label" for="5-c">
                                Ni de acuerdo ni en desacuerdo
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta5" id="5-d" v-model="respuestas.respuesta5" value="4">
                            <label class="form-check-label" for="5-d">
                                En desacuerdo
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta5" id="5-e" v-model="respuestas.respuesta5" value="5">
                            <label class="form-check-label" for="5-e">
                                Totalmente en desacuerdo
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <p>6.- ¿Porqué?</p>
                    <div>
                        <input type="text" class="form-control" id="6" v-model="respuestas.respuesta6">
                    </div>
                </div>
                <div class="col-md-6">
                    <p>7.- Derivado de alguna de las preguntas, reflexiones o comentarios realizados durante las discusiones en los foros del curso de filosofía de la ciencia, pudiste ver tu trabajo con otros ojos y detectar nuevos problemas para tu proyecto de tesis, o tu línea de investigación: </p>
                    <div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta7" id="7-a" checked v-model="respuestas.respuesta7" value="1">
                            <label class="form-check-label" for="7-a">
                                Totalmente de acuerdo
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta7" id="7-b" v-model="respuestas.respuesta7" value="2">
                            <label class="form-check-label" for="7-b">
                                De acuerdo
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta7" id="7-c" v-model="respuestas.respuesta7" value="3">
                            <label class="form-check-label" for="7-c">
                                Ni de acuerdo ni en desacuerdo
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta7" id="7-d" v-model="respuestas.respuesta7" value="4">
                            <label class="form-check-label" for="7-d">
                                En desacuerdo
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta7" id="7-e" v-model="respuestas.respuesta7" value="5">
                            <label class="form-check-label" for="7-e">
                                Totalmente en desacuerdo
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <p>8.- Consideras necesaria la inclusión de la filosofía de la ciencia en posgrados con perfil educativo:</p>
                    <div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta8" id="8-a" checked v-model="respuestas.respuesta8" value="1">
                            <label class="form-check-label" for="8-a">
                                Totalmente de acuerdo
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta8" id="8-b" checked v-model="respuestas.respuesta8" value="2">
                            <label class="form-check-label" for="8-b">
                                De acuerdo
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta8" id="8-c" checked v-model="respuestas.respuesta8" value="3">
                            <label class="form-check-label" for="8-c">
                                Ni de acuerdo ni en desacuerdo
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta8" id="8-d" checked v-model="respuestas.respuesta8" value="4">
                            <label class="form-check-label" for="8-d">
                                En desacuerdo
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input class="form-check-input" type="radio" name="pregunta8" id="8-e" checked v-model="respuestas.respuesta8" value="5">
                            <label class="form-check-label" for="8-e">
                                Totalmente en desacuerdo
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <p>9.- ¿Porqué?</p>
                    <div>
                        <input type="text" class="form-control" id="9" v-model="respuestas.respuesta9">
                    </div>
                </div>
                
                
                
                <div class="col-12">
                    <button type="submit" class="btn btn-success mb-5 mt-5" :disabled="bloquear">Responder</button>
                </div>
            </form>
            <div class="spinner-border" role="status" v-if="spinner">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>


<script>
import CuestionarioDescription from '@/components/CuestionarioDescription'
export default {
    components: {
        CuestionarioDescription
    },
    data() {
        return {
            respuestas: {
                lineaInvestigacion: '',
                pais: '',
                nivelEstudios: '1',
                experiencia: '1',
                respuesta1: '1',
                respuesta2: '1',
                respuesta3: '1',
                respuesta4: '1',
                respuesta5: '1',
                respuesta6: '',
                respuesta7: '1',
                respuesta8: '1',
                respuesta9: ''

            },
            spinner: false
        }
    },
    computed: {
        bloquear(){
            return (
                this.respuestas.lineaInvestigacion == "" ||
                this.respuestas.pais == "" ||
                this.respuestas.nivelEstudios == "" ||
                this.respuestas.experiencia == "" ||
                this.respuestas.respuesta1 == "" ||
                this.respuestas.respuesta2 == "" ||
                this.respuestas.respuesta3 == "" ||
                this.respuestas.respuesta4 == "" ||
                this.respuestas.respuesta5 == "" ||
                this.respuestas.respuesta6 == "" ||
                this.respuestas.respuesta7 == "" ||
                this.respuestas.respuesta8 == "" ||
                this.respuestas.respuesta9 == "" ) ? true : false;
        }  
    },
     methods: {
        generarIdentificador() {
            let resultado = '';
            const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for ( let i = 0; i < 10; i++ ) {
                resultado += characters.charAt(Math.floor(Math.random() * 10));
            }
            return resultado;
        }, 
        async guardarRespuestas() {
            
            //Iniciamos el spinner
            this.spinner = true;

            //Logica del Back
            const nombre = this.$route.params.nombre_alumno;
            const identificador = this.generarIdentificador();
            // const respuestas = this.respuestas;
            const version_respuesta = '1';
            const cuestionario = '4';

            //Generamos el arreglo
            const nuevoAlumno = {
                nombre,
                identificador,
                version_respuesta,
                cuestionario,
                respuestas: this.respuestas
            }
            // const nuevoAlumno = {
            //     nombre,
            //     identificador,
            //     version_respuesta,
            //     cuestionario,
            //     respuestas: {
            //         respuesta1: 'test11',
            //         respuesta2: 'test11',
            //         respuesta3: 'test11'
            //     }
            // };
            // console.log(nuevoAlumno, this.respuestas);
            const urlAPI = 'https://back-beifi-project.herokuapp.com/';

            // console.log(nuevoAlumno, urlAPI)
            try {
                const response = await fetch(urlAPI, {
                    method: 'POST',
                    body: JSON.stringify(nuevoAlumno),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                const data = await response.json();
                this
                console.log(data);

                this.$swal({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Registro exitoso',
                    showConfirmButton: false,
                    timer: 1500
                });
                this.limpiarFormulario();
                // this.$route.push('/')
                
            } catch (error) {
                console.log(error);

                this.$swal({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Registro fallido, intente de nuevo',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            

            //Quitamos el sipinner
            this.spinner = false;
            
        },
        limpiarFormulario() {
            this.lineaInvestigacion = '';
            this.pais = '',
            this.nivelEstudios = '1',
            this.experiencia = '1',
            this.respuestas.respuesta1 = "1";
            this.respuestas.respuesta2 = "1";
            this.respuestas.respuesta3 = "1";
            this.respuestas.respuesta4 = "1";
            this.respuestas.respuesta5 = "1";
            this.respuestas.respuesta6 = "";
            this.respuestas.respuesta7 = "1";
            this.respuestas.respuesta8 = "1";
            this.respuestas.respuesta9 = "";
        }
    }
}
</script>