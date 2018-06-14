class Api::BillsController < ApplicationController

  def index
    # @created_bills = current_user.created_bills
    # @bills = current_user.bills
    @all_bills = Bill.all
    @bill_memberships = Billmembership.all
  end

  def show
    @bill = Bill.find(params[:id])
    @comments = @bill.comments
  end

  def create
    @bill = Bill.new(bill_params)
    # debugger
    if @bill.save
      Billmembership.create(member_id: (current_user.id), bill_id: @bill.id)
      Billmembership.create(member_id: (params[:otherId].to_i), bill_id: @bill.id)
      @comments = @bill.comments

      render :show
    else
      render json: @bill.errors.full_messages, status: 422
    end

  end

  def destroy
    @bill = Bill.find(params[:id])
    
    @bill_memberships = Billmembership.all.select {|billmem| billmem.bill_id == @bill.id}
    @bill_memberships.each do |billmem|
      billmem.destroy
    end

    @bill.destroy
  end

  private

  def bill_params
    params.require(:bill).permit(:title, :creator_id, :total_bill, :date)
  end


end
