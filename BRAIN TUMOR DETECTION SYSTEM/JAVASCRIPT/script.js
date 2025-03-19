document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the uploaded image
    const mriImage = document.getElementById('mriImage').files[0];
    const tumorType = document.getElementById('tumorType').value;
    const resultSection = document.getElementById('resultSection');
    const uploadedImage = document.getElementById('uploadedImage');

    if (mriImage) {
        // Display the uploaded image
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = 'block';
        };
        reader.readAsDataURL(mriImage);

        // Simulate analysis result (replace this with actual ML model integration later)
        setTimeout(() => {
            resultSection.innerHTML = `
                <p><strong>Selected Tumor Type:</strong> ${tumorType.charAt(0).toUpperCase() + tumorType.slice(1)}</p>
                <p><strong>Analysis Result:</strong> Simulated detection - Tumor detected (Mock result).</p>
            `;
        }, 1000);
    } else {
        resultSection.innerHTML = `<p class="text-danger">Please upload an MRI image to analyze.</p>`;
    }
});