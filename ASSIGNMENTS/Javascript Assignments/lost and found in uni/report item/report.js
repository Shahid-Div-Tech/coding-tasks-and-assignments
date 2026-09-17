const reportForm = document.getElementById("reportForm");

reportForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token){
         return alert("Please login first!");
    }

    const formData = new FormData();
    

    formData.append("kind", document.getElementById("itemKind").value);
    
    formData.append("itemName", document.getElementById("itemName").value);
    formData.append("description", document.getElementById("description").value);
    formData.append("category", document.getElementById("category").value);
    formData.append("locationName", document.getElementById("locationName").value);
    
    // Organization ID 
    formData.append("organization", "69fa84df82ee25b5937a6910"); 

    // Image handling
 const file = document.getElementById("images").files[0];

formData.append("images", file);

    try {
        const response = await fetch("http://localhost:3000/api/items", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            body: formData
        });

        const result = await response.json();

        if (result.status) {
            alert("Report submitted successfully!");
            window.location.reload();
        } else {
            alert("Error: " + result.message);

        }
    } catch (err) {
        alert("Server error. Make sure your backend is running.");
    }
});