json.bills do
  @all_bills.each do |bill|
    json.set! bill.id do
      json.extract! bill, :id, :title, :creator_id, :total_bill, :date
    end
  end
end

json.billmemberships do
  @bill_memberships.each do |bm|
    json.set! bm.id do
      json.extract! bm, :id, :member_id, :bill_id
    end
  end
end
