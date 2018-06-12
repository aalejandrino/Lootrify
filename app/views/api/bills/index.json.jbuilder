json.created_bills do
  @created_bills.each do |bill|
    json.set! bill.id do
      json.extract! bill, :id, :title, :creator_id, :total_bill, :date
    end
  end
end

json.bills do
  @bills.each do |bill|
    json.set! bill.id do
      json.extract! bill, :id, :title, :creator_id, :total_bill, :date
    end
  end
end
