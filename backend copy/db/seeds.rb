User.destroy_all()
Product.destroy_all()
Customer.destroy_all()
Corder.destroy_all()


# productsArray = [
#   {
#     name: "Aspen Sky",
#     price: 11,
#     color: "Blue",
#     sku: "FMC144",
#     onhand_qty: 2,
#     coming_in_qty: 12,
#     sale_price: 8,
#     image_url: "https://s3-us-west-1.amazonaws.com/ymw/www.mycolorstreet.com/FESphwWbSMSKx5T8K/xX7PKBoaTw3tALHq5_ubnpNpZLMPYJCNgEG.jpg?v21"
#   },
#   {
#     name: "Mermaid Brigade",
#     price: 13,
#     color: "Blue",
#     sku: "FDG323",
#     onhand_qty: 14,
#     coming_in_qty: 4,
#     sale_price: 10,
#     image_url: "https://s3-us-west-1.amazonaws.com/ymw/user/TsKx6pPvv3j5g45gc/LBG9qWSm4Bpb3acyS_QCodJcoeDer4s5JzX.jpg?v21"
#   },
#   {
#     name: "Fort Worth It",
#     price: 12,
#     color: "Silver",
#     sku: "FMG136",
#     onhand_qty: 2,
#     coming_in_qty: 16,
#     sale_price: 10,
#     image_url: "https://s3-us-west-1.amazonaws.com/ymw/user/TsKx6pPvv3j5g45gc/6SzTAajqAQoFeZHQ9_fyPMSfRucPmgbwbnb_original.jpeg?v21"
#   }
  
# ]

u1 = User.create(username: "Krysta110", password: "temp", first_name: "Krysta", last_name: "Wolkowiecki", company_name: "ColorStreet")

# productsArray.each do |p|
#   Product.create(
#     name: p[:name],
#     price: p[:price],
#     color: p[:color],
#     sku: p[:sku]
#     )
# end

product1 = Product.create!(
  name: "Aspen Sky",
  price: 11,
  color: "Blue",
  sku: "FMC144",
  onhand_qty: 0,
  user_id: u1.id
)

product2 = Product.create(
  name: "Mermaid Brigade",
  price: 13,
  color: "Blue",
  sku: "FDG323",
  onhand_qty: 0,
  user_id: u1.id
)

product3 = Product.create(
  name: "Fort Worth It",
  price: 12,
  color: "Silver",
  sku: "FMG136",
  onhand_qty: 0,
  user_id: u1.id
  )

c1 = Customer.create(
  name: "Mary",
  phone: "716-555-6677",
  email: "MaryODoyleRules@fake.com",
  user_id: u1.id
)

c2 = Customer.create(
  name: "Amber",
  phone: "716-222-4455",
  email: "AmberRox@fake.com",
  user_id: u1.id
)


corder1= Corder.create(
  customer_id: c1.id,
  total_paid: 36.00,
  paid_with: "Paypal",
  product_id: product1.id
)

corder2= Corder.create(
  customer_id: c1.id,
  total_paid: 24.00,
  paid_with: "Paypal",
  product_id: product2.id
)

corder3= Corder.create(
  customer_id: c2.id,
  total_paid: 22.00,
  paid_with: "Cash",
  product_id: product2.id
)

corder4= Corder.create(
  customer_id: c2.id,
  total_paid: 14.00,
  paid_with: "Venmo",
  product_id: product3.id
)