json.array! @friends do |friend|

  json.extract! friend, :id, :user_id, :friend_id

end
