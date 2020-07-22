User.destroy_all()
Painting.destroy_all()
Product.destroy_all()


paintings = [
  {
    title: "Portrait of a Carthusian",
    image:
      "https://d32dm0rphc51dk.cloudfront.net/pVc7CubFzVlPhbErTAqyYg/medium.jpg"
  },
  {
    title: "Study of a Young Woman",
    image:
      "https://d32dm0rphc51dk.cloudfront.net/pLcp7hFbgtfYnmq-b_LXvg/medium.jpg"
  },
  {
   title: "Portrait of Gerard de Lairesse",
    image:
      "https://d32dm0rphc51dk.cloudfront.net/6b4QduWxeA1kSnrifgm2Zw/medium.jpg"
  }
]


paintings.each do |p|
  Painting.create(title: p[:title], image: p[:image])
end

products = [
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

u1 = User.create(username: "Krysta110")

products.each do |p|
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
