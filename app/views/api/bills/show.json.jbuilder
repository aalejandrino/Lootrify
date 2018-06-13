json.bill do
  json.extract! @bill, :id, :title, :creator_id, :total_bill, :date

end

json.comments do
  @comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :bill_id, :author_id, :body
    end
  end
end
