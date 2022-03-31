<template>

    <div id="cuestionario_1">
        <div class="main_content container" id="curso">
            <cuestionario-description msgCuestionario="Cuestionario 1"/>
            <div class="main_instructions mb-5">
                <p>
                    A continuación, se presentan seis preguntas, por favor, responde primeramente <span class="si">Sí</span> o <span class="no">No</span>, y complementa con tus propias palabras tu respuesta:
                </p>
            </div>
            <form class="row g-3" @submit.prevent="guardarRespuestas">
                <div class="col-md-6">
                    <p>¿Consideras que los objetos matemáticos son reales, en el mismo sentido que los objetos físicos?</p>
                    <div class="form-floating">
                        <textarea v-model="respuestas.respuesta1" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                        <label for="floatingTextarea2">Escribe tu respuesta</label>
                    </div>
                </div>
                <div class="col-md-6 d-flex flex-column justify-content-between">
                    <p>¿Un objeto matemático, está en el tiempo?</p>
                    <div class="form-floating">
                        <textarea v-model="respuestas.respuesta2" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                        <label for="floatingTextarea2">Escribe tu respuesta</label>
                    </div>
                </div>
                <div class="col-md-6">
                    <p>¿Un objeto matemático, encarna algo en la realidad material?</p>
                    <div class="form-floating">
                        <textarea v-model="respuestas.respuesta3" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                        <label for="floatingTextarea2">Escribe tu respuesta</label>
                    </div>
                </div>
                <div class="col-md-6">
                    <p>Los objetos matemáticos, ¿son objetos físicos?</p>
                    <div class="form-floating">
                        <textarea v-model="respuestas.respuesta4" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                        <label for="floatingTextarea2">Escribe tu respuesta</label>
                    </div>
                </div>
                <div class="col-md-6">
                    <p>¿Consideras que la representación matemática de un objeto físico, define la naturaleza de este último?</p>
                    <div class="form-floating">
                        <textarea v-model="respuestas.respuesta5" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                        <label for="floatingTextarea2">Escribe tu respuesta</label>
                    </div>
                </div>
                <div class="col-md-6">
                    <p>¿Crees que para conceptualizar una entidad física, sólo puede hacerse mediante una representación matemática?</p>
                    <div class="form-floating">
                        <textarea v-model="respuestas.respuesta6" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                        <label for="floatingTextarea2">Escribe tu respuesta</label>
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
                respuesta1: '',
                respuesta2: '',
                respuesta3: '',
                respuesta4: '',
                respuesta5: '',
                respuesta6: '',
            },
            spinner: false

        }
    },
    computed: {
        bloquear(){
            return (
                this.respuestas.respuesta1 == "" ||
                this.respuestas.respuesta2 == "" ||
                this.respuestas.respuesta3 == "" ||
                this.respuestas.respuesta4 == "" ||
                this.respuestas.respuesta5 == "" ||
                this.respuestas.respuesta6 == "" ) ? true : false;
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
            const cuestionario = '1';

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
            // console.log(nuevoAlumno);
            const urlAPI = 'https://back-beifi-project.herokuapp.com/';

            try {
                const response = await fetch(urlAPI, {
                    method: 'POST',
                    body: JSON.stringify(nuevoAlumno),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                const data = await response.json();
                console.log(data);

                this.$swal({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Registro exitoso',
                    showConfirmButton: false,
                    timer: 1500
                });
                this.limpiarFormulario();
                this.$router.push('/')
                
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
            this.respuestas.respuesta1 = "";
            this.respuestas.respuesta2 = "";
            this.respuestas.respuesta3 = "";
            this.respuestas.respuesta4 = "";
            this.respuestas.respuesta5 = "";
            this.respuestas.respuesta6 = "";
        }
    }
}
</script>

