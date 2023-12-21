$(document).ready(function() {
    let vehicleCount = 1;

    $('#addVehicleBtn').click(function() {
        vehicleCount++;
        const vehicleTemplate = `
            <div class="vehicle-section">
                <h6>Vehicle ${vehicleCount}</h6>
                <div class="form-group">
                    <label for="plateNumber${vehicleCount}">Plate#:</label>
                    <input type="text" class="form-control" id="plateNumber${vehicleCount}" required>
                </div>
                <div class="form-group">
                    <label for="stateRegistered${vehicleCount}">State Registered In:</label>
                    <input type="text" class="form-control" id="stateRegistered${vehicleCount}" required>
                </div>
                <div class="form-group">
                    <label for="make${vehicleCount}">Make (optional):</label>
                    <input type="text" class="form-control" id="make${vehicleCount}">
                </div>
                <div class="form-group">
                    <label for="model${vehicleCount}">Model (optional):</label>
                    <input type="text" class="form-control" id="model${vehicleCount}">
                </div>
                <div class="form-group">
                    <label for="year${vehicleCount}">Year (optional):</label>
                    <input type="text" class="form-control" id="year${vehicleCount}">
                </div>
            </div>
        `;

        $(vehicleTemplate).insertBefore('#addVehicleBtn');
    });
});
const tollRates = {
    "2": { "fastrak": "$8.75", "plate": "$9.00", "invoice": "$9.75" },
    "3": { "fastrak": "$26.25", "plate": "$27.00", "invoice": "$29.25" },
    "4": { "fastrak": "$35.00", "plate": "$36.00", "invoice": "$39.00" },
    "5": { "fastrak": "$43.75", "plate": "$45.00", "invoice": "$48.75" },
    "6": { "fastrak": "$52.50", "plate": "$54.00", "invoice": "$58.50" },
    "7": { "fastrak": "$61.25", "plate": "$63.00", "invoice": "$68.25" },
    "Carpool": { "fastrak": "$6.75", "plate": "n/a", "invoice": "n/a" },
    // ... Add all rates as per your axles and payment methods
    // ...
};

function updateTollRate() {
    const axles = document.getElementById("axlesSelect").value;
    const paymentMethod = document.getElementById("paymentMethod").value;
    
    const rate = tollRates[axles][paymentMethod];
    
    document.getElementById("tollRate").innerText = rate ? rate : "N/A";
}