<template>
    
        <span class="number-caption" style="line-height: 28px; font-family: manrope; font-weight: 600; font-size: 16px;">Biography</span>
            
        <div style="margin-bottom: 10px;">
            <v-textarea style="border-radius:32px !important; width: 940px;"
                counter
                persistent-counter
                autocomplete="text"
                placeholder="Your biography is visible on your public profile..."
                bg-color="#12181F"
                variant="none"
                clearable
                hint="Max 180 characters: "
                persistent-hint
                clear-icon="mdi-close-circle" color="gray"
                no-resize
                
            ></v-textarea>
            </div>
        <v-btn class="update-btn" style="letter-spacing: 0px;">Update bio</v-btn>
</template>

<style>
.v-counter {
    color: #D8D8D8 !important;
    flex: 0 1 auto;
    font-size: 12px;
    transition-duration: 150ms;
    font-weight: 700 !important;
    display: flex;
    position: absolute;
    margin-left: 134px;
}

</style>
