var app = new Vue({
    el: '#uploadSingle',
    data() {
        return {
            message: 'Hello Vue!',
            singleFile: '',
            refFile: '',
            chosenFile: 'Chose file'
        };
    },
    methods:{
        handleFileUpload(event){
            console.log(event)
            this.singleFile = event.target.files[0];
            // this.refFile = this.$refs.file.files[0];
            this.chosenFile = this.singleFile.name
        },
        submitFile(){
            let formData = new FormData();

            formData.append('file', this.singleFile);

            axios.post( '/single-file',
                formData,{
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then(function(){console.log('SUCCESS!')})
            .catch(function(){console.log('FAILURE!!!')})

        }
    },
    mounted() {

    }
})