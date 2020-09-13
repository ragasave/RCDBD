<template>
    <div class="playground-pg">
        <headerLayout></headerLayout>
        <div class="playground-pg-container">
            <leftAside :db="db"></leftAside>
            <Playground :db="db"></Playground>
            <rightAside :db="db" :dataTypes="dataTypes"></rightAside>
        </div>
    </div>
</template>
<script>
import main from './src/main';
export default main;
</script>