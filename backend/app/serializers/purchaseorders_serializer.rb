class PurchaseorderSerializer < ActiveModel::Serializer
  attributes :id, :date,
  :total_paid, :company_name,
  :description, :order_num, :product_id

end
