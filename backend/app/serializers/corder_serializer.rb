class CorderSerializer < ActiveModel::Serializer
  attributes :id, :customer_id, :total_paid, :paid_with, :order_num
end
