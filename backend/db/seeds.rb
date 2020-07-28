User.destroy_all()
Product.destroy_all()
Poproduct.destroy_all()
Porder.destroy_all()
Customer.destroy_all()
Item.destroy_all()
Coitem.destroy_all()
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

u1 = User.create(username: "Krysta110", password: "temp", first_name: "Krysta", last_name: "Wolkowiecki")

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
  sku: "FMC144"
)

product2 = Product.create(
  name: "Mermaid Brigade",
  price: 13,
  color: "Blue",
  sku: "FDG323"
)

product3 = Product.create(
  name: "Fort Worth It",
  price: 12,
  color: "Silver",
  sku: "FMG136"
  )



porder1=Porder.create(
  user_id: u1.id,
  total_paid: 133.44,
  company_name: "ColorStreet",
  description: "strips",
  order_num: "13386850",
)

poproduct1 = Poproduct.create(
  product_id: product1.id,
  porder_id: porder1.id,
  qty: 2
)

poproduct2 = Poproduct.create(
  product_id: product2.id,
  porder_id: porder1.id,
  qty: 2
)

item1 = Item.create(
  user_id: u1.id,
  product_id: product1.id,
  onhand_qty: 2,
  comingin_qty: 3,
  sale_price:8
)

item2 = Item.create(
  user_id: u1.id,
  product_id: product2.id,
  onhand_qty: 4,
  comingin_qty: 2,
  sale_price:10
)

item3 = Item.create(
  user_id: u1.id,
  product_id: product3.id,
  onhand_qty: 3,
  comingin_qty: 5,
  sale_price:10
)

c1 = Customer.create(
  name: "Mary",
  phone: "716-555-6677",
  email: "MaryODoyleRules@fake.com",
  user_id: u1.id
)

corder1= Corder.create(
  customer_id: c1.id,
  total_paid: 36.00,
  order_num: "HH239",
  paid_with: "Paypal"
)

coitem1 = Coitem.create(
  item_id: item1.id,
  corder_id: corder1.id,
  qty: 2
)

coitem2 = Coitem.create(
  item_id: item2.id,
  corder_id: corder1.id,
  qty: 2
)