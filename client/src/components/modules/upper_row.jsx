import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { BsArrowUpSquareFill } from "react-icons/bs";
import { BsArrowDownSquareFill } from "react-icons/bs";
import Pie_chart from "./pie_chart";
import Scatter_plot from "./scatter_plot";
import ScatterPlot from "./scatter_plot";

const Upper_row = () => {
  return (
    <div className="upper__container">
      <div className="col1">
        <div className="out__in">
          <div className="above">
            <BsArrowUpSquareFill className="square__icon" />
            <div className="above__right">
              <p className="price__2">$780.50</p>
              <small className="tiny">Topup</small>
            </div>
          </div>
          <hr className="hr__dotted" />
          <div className="below">
            <BsArrowDownSquareFill className="square__icon" />
            <div className="outin__lower">
              <p className="price__2">$780.50</p>
              <small className="tiny">Topup</small>
            </div>
          </div>
        </div>
        <div className="top__up">
          <div className="topup__upper">
            <div className="topup__right">
              <small className="tiny">Topup</small>
              <p className="price__2">$780.50</p>
            </div>
            <div className="topup__left">
              <BsArrowUpRightCircleFill className="icon" />
            </div>
          </div>
          <div className="topup__lower">
            <input
              type="range"
              name="topup__range"
              id="topup__range"
              className="range"
            />
          </div>
        </div>
      </div>

      <div className="col2">
        <div className="outin__2">
          <div className="above__2">
            <p>Designers Group Dublin</p>
            <div className="small">
              <small>Weekly Pay</small>
            </div>
          </div>

          <div className="below__2">
            <div className="circles__row">
              <div className="circle">
                <small>dr</small>
              </div>
              <div className="circle">
                <small>md</small>
              </div>
              <div className="circle">
                <small>pk</small>
              </div>
              <div className="circle active">
                <small className="">db</small>
              </div>
            </div>
            <div className="outinlower__2">
              <BsArrowUpRightCircleFill className="icon__2" />
            </div>
          </div>
        </div>
        <div className="topup__2">
          <Pie_chart />
        </div>
      </div>

      <div className="col3">
        <div className="outin__3">
          <ScatterPlot />
        </div>
        <div className="top__up">
          <div className="topup__upper">
            <div className="topup__right">
              <small className="tiny">Topup</small>
              <p className="price__2">$780.50</p>
            </div>
            <div className="topup__left">
              <BsArrowUpRightCircleFill className="icon" />
            </div>
          </div>
          <div className="topup__lower">
            <input
              type="range"
              name="topup__range"
              id="topup__range"
              className="range"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upper_row;
