
# Expected input
# First Name | Age | Gender | Health Conditions
# Kelly | 50 | female | Allergies
# Josh | 40 | male | Sleep Apnea
# Brad | 20 | male | Heart Disease

# Expected output
# Kelly - $210.20
# Josh - $190.80
# Brad - $117.00


curl "http://localhost:3000/tacoservice?name=Kelly&age=50&gender=female&condition=Allergies"
curl "http://localhost:3000/tacoservice?name=clearJosh&age=40&gender=male&condition=Sleep%20Apnea"
curl "http://localhost:3000/tacoservice?name=Brad&age=20&gender=male&condition=Heart%20Disease"