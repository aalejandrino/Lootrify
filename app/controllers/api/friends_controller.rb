class Api::FriendsController < ApplicationController

  def index
    friends1 = current_user.friendships
    friends2 = []

    friends1.each do |friend|
      friends2 << Friend.find_by_ids(friend.friend_id, friend.user_id)
    end

    @friends = friends1 + friends2

  end

  def create
    @friend = Friend.new(friend_params)
    @user = User.find_by_id(@friend.friend_id)

    if @friend.save

      render :show
    else
      render json: @friend.errors.full_messages, status: 422
    end
  end

  def show
    @friend = Friend.find(params[:id])
    @user = User.find_by_id(@friend.friend_id)


  end

  def destroy
    @friend = Friend.find(params[:id])

    @friend.destroy
  end

  private

  def friend_params
    params.require(:friend).permit(:user_id, :friend_id)
  end

end
