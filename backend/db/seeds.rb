User.destroy_all()
Product.destroy_all()
PurchaseOrder.destroy_all()


productsArray = [
  {
    name: "Aspen Sky",
    price: 11,
    color: "Blue",
    sku: "FMC144",
    onhand_qty: 2,
    coming_in_qty: 12,
    sale_price: 8,
    image_url: "https://s3-us-west-1.amazonaws.com/ymw/www.mycolorstreet.com/FESphwWbSMSKx5T8K/xX7PKBoaTw3tALHq5_ubnpNpZLMPYJCNgEG.jpg?v21"
  },
  {
    name: "Mermaid Brigade",
    price: 13,
    color: "Blue",
    sku: "FDG323",
    onhand_qty: 14,
    coming_in_qty: 4,
    sale_price: 10,
    image_url: "https://s3-us-west-1.amazonaws.com/ymw/user/TsKx6pPvv3j5g45gc/LBG9qWSm4Bpb3acyS_QCodJcoeDer4s5JzX.jpg?v21"
  },
  {
    name: "Fort Worth It",
    price: 12,
    color: "Silver",
    sku: "FMG136",
    onhand_qty: 2,
    coming_in_qty: 16,
    sale_price: 10,
    image_url: "https://s3-us-west-1.amazonaws.com/ymw/user/TsKx6pPvv3j5g45gc/6SzTAajqAQoFeZHQ9_fyPMSfRucPmgbwbnb_original.jpeg?v21"
  }
  
]

u1 = User.create(username: "Krysta110", password: "temp", first_name: "Krysta", last_name: "Wolkowiecki")

productsArray.each do |p|
  Product.create(
    name: p[:name],
    price: p[:price],
    color: p[:color],
    sku: p[:sku],
    onhand_qty: p[:onhand_qty],
    coming_in_qty: p[:coming_in_qty],
    sale_price: p[:sale_price],
    image_url: p[:image_url],
    user_id: u1.id
    )
end

po1=PurchaseOrder.create(
  # date: 2020-07-16,
  total_paid: 133.44,
  company_name: "ColorStreet",
  description: "strips",
  order_num: "13386850"
  # product_id: Product.all.last.id
)
