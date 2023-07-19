document.getElementById('mp3Form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nomeArquivo = document.getElementById('nome_arquivo').value;
    const base64Audio = document.getElementById('base64_audio').value;
  
    // Enviar os dados para o servidor
    fetch('gerar_mp3.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `nome_arquivo=${encodeURIComponent(nomeArquivo)}&base64_audio=${encodeURIComponent(base64Audio)}`
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        document.getElementById('resultado').innerHTML = `
          <p>Arquivo MP3 gerado com sucesso!</p>
          <a href="${data.arquivo_mp3}" download>Download do Arquivo MP3</a>
        `;
      } else {
        document.getElementById('resultado').innerHTML = `<p>Ocorreu um erro ao gerar o arquivo MP3.</p>`;
      }
    })
    .catch(error => {
      console.error('Erro:', error);
      document.getElementById('resultado').innerHTML = `<p>Ocorreu um erro ao comunicar com o servidor.</p>`;
    });
  });