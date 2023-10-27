<script>

</script>

<template>

    <div class="text-white">
        <h1 class="text-3xl md:text-6xl font-bold py-1 md:py-2 px-1 md:px-2 border-l-[5px] md:border-l-[10px] border-l-primary capitalize">
            <slot name="title" />
        </h1>
        <p class="text-base md:text-xl mt-1 text-gray-300">
            <slot name="description" />
        </p>
    </div>

</template>