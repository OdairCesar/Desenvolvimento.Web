
    function mover(elem, inicio, fim, passo, callback) {
        const novoInicio = inicio - passo
        if(novoInicio >= fim) {
            elem.style.left = novoInicio + 'px'
            setTimeout(() => mover(elem, novoInicio, fim, passo, callback), 16)
        } else {
            callback()
        }
    }

    /** Testando a função Mover */
    // const p = document.querySelector('[wm-slider] > p')
    // p.style.display = 'block'
    // mover(p, 1500, -520, 5, () => {
    //     console.log('Terminou!!!')
    // })

    function slider() {
        const elementos = document.querySelectorAll('[wm-slider] > p')
        const slides = Array.from(elementos)//Transforma um nodeList em ARRAY
        exibirSlide(slides, slides[0])
    }

    function exibirSlide(slides, slide) {
        slide.style.display = 'block'

        const inicio = innerWidth // Largura da pagina
        const fim = -slide.clientWidth //Menos largura da imagem, para quando ela para ele suma da tela

        slide.style.left = `${inicio}px`

        mover(slide, inicio, fim, 5, () => {
            slide.style.display = 'none'
            exibirSlide(slides, getProximo(slides, slide))
        })
    }

    function getProximo(lista, atual) {// Função para pegar a proxima imagem, caso esteja na ultima ele voltara para o inicio.
        const i = lista.indexOf(atual) + 1
        return i < lista.length ? lista[i] : lista[0]
    }
