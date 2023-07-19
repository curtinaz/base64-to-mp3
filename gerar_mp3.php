<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Obter os dados do POST
  $nomeArquivo = $_POST['nome_arquivo'];
  $base64Audio = $_POST['base64_audio'];

  // Decodificar o base64 e obter os dados binários
  $audioData = base64_decode(explode(',', "data:audio/wav;base64," . $base64Audio)[1]);

  // Caminho do novo arquivo MP3 (onde será salvo)
  $novoArquivoMP3 = './' . $nomeArquivo . '.mp3';

  // Salvar os dados binários no arquivo MP3
  if (file_put_contents($novoArquivoMP3, $audioData)) {
    ?>

      <h1>Tudo certo!</h1>

      <a href="./index.html">Gerar outro</a> - 
      <a href="./<?= $novoArquivoMP3 ?>">Ouvir audio</a>

    <?php
  } else {
    echo json_encode(['success' => false]);
  }
}
?>
