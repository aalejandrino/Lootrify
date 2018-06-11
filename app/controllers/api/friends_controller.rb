class Api::FriendsController < ApplicationController

  def index
    @friends = Friend.all
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
