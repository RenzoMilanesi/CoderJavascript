const questionsContainer=document.querySelector('.questions__container')
/*Carga dinamica de las preguntas , sacadas de questions-db.js */
preguntas.forEach((pregunta)=>{
    const article=document.createElement('article')
    article.className="questions__padding";
    article.innerHTML=`
    <div class="questions__answer">
                        <h3 class="questions__title">${pregunta.preguntas_titulo}
                            <span class="questions__arrow">
                                <i class="bi bi-arrow-down-circle questions__img" ></i>
                            </span>
                        </h3>

                        <p class="questions__show">${pregunta.preguntas_respuetas}</p>
                    </div>
    `
    questionsContainer.append(article)
})