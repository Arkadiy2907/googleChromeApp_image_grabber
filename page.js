chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  addImagesToContainer(message);
  sendResponse('OK');
});

function addImagesToContainer(urls) {
  if (!urls || !urls.length) {
    return;
  }
  const container = document.querySelector('.container');
  urls.forEach((url) => {
    const div = document.createElement('div');
    div.className = 'imageDiv';
    const img = document.createElement('img');
    img.src = url;
    div.appendChild(img);
    container.appendChild(div);
    div.addEventListener('click', () => {
      div.classList.toggle('selected');
    });
  });
}

document.getElementById('selectAll').addEventListener('change', (event) => {
  const images = document.querySelectorAll('.container .imageDiv');
  for (let image of images) {
    image.classList.toggle('selected', event.target.checked);
  }
});

document.getElementById('downloadBtn').addEventListener('click', async () => {
  try {
    const urls = [];
    const images = document.querySelectorAll(
      '.container .imageDiv.selected img'
    );
    for (let image of images) {
      urls.push(image.src);
    }
    const archive = await createArchive(urls);
    downloadArchive(archive);
  } catch (err) {
    alert(err.message);
  }
});

async function createArchive(urls) {
  const zip = new JSZip();
  for (let index in urls) {
    try {
      const url = urls[index];
      const response = await fetch(url);
      const blob = await response.blob();
      zip.file(checkAndGetFileName(index, blob), blob);
    } catch (err) {
      console.error(err);
    }
  }
  return zip.generateAsync({
    type: 'blob',
    compression: 'DEFLATE',
    compressionOptions: {
      level: 9,
    },
  });
}

function checkAndGetFileName(index, blob) {
  let name = parseInt(index) + 1;
  const [type, extension] = blob.type.split('/');
  if (type != 'image' || blob.size <= 0) {
    throw Error('Incorrect content');
  }
  return name + '.' + extension.split('+').shift();
}

function downloadArchive(archive) {
  const link = window.document.createElement('a');
  link.href = window.URL.createObjectURL(archive);
  link.download = 'images.zip';
  document.body.appendChild(link);
  link.click();
  window.URL.revokeObjectURL(link.href);
  document.body.removeChild(link);
}
