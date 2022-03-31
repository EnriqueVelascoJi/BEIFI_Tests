<template>
    <div class="main_title">
        <h1>{{msgCuestionario}}</h1>
    </div>
    <div class="row">
        <div class="img_description col-md-6 d-flex align-self-center">
            <img src="@/assets/img/science.png" alt="science" class="img-fluid">
        </div>
        <div class="text_description col-md-6 d-flex align-self-center">
            <p>El siguiente cuestionario forma parte del proyecto: “El enfoque filosófico en la enseñanza de la física moderna a nivel universitario. Aspectos ontológicos y epistemológicos”. Dicho proyecto se centra, desde un enfoque filosófico, en medir la evolución conceptual y sentido crítico en los estudiantes, en los cursos de física y matemáticas de escuelas de ingeniería, con respecto a la naturaleza y existencia de las entidades matemáticas y físicas. A la vez, pretende identificar aspectos ontológicos y epistemológicos sobre las concepciones que tienen los estudiantes respecto a las entidades físicas, que poseen una representación matemática.</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        msgCuestionario: String
    }
}
</script>
<style>
    
</style>