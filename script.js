let dropdownButton = document.querySelector('user-icon.jpg');
        let dropdownContent = document.querySelector('sidebar-right');

        // Adiciona um evento de clique ao botão
        dropdownButton.addEventListener('click', () => {
            // Alterna a visibilidade do conteúdo do dropdown
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });

        // Fecha o dropdown se o usuário clicar fora dele
        window.addEventListener('click', (event) => {
            if (!event.target.matches('.dropdown-button')) {
                if (dropdownContent.style.display === 'block') {
                    dropdownContent.style.display = 'none';
                }
            }
        });