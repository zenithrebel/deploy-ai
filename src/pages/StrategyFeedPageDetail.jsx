import React from "react";
import { Link } from "react-router";
import Comment from "../components/pages/strategy-feed-page-detail/Comment";
import Detail from "../components/pages/strategy-feed-page-detail/Detail";

export default function StrategyFeedPageDetail() {
  return (
    <div className="">
      <div className="ml-[38px] flex items-center gap-4 mb-6 text-sm font-medium">
        <Link
          to={"/strategy-feed"}
          className="hover:text-secondary transition-all"
        >
          Strategy Feed
        </Link>
        <span className="hover:text-secondary transition-all cursor-pointer">
          /
        </span>
        <Link to={"/strategy-feed/1"} className="text-secondary">
          ETH - BTC Long Swing
        </Link>
      </div>
      <Detail />
      <Comment />
    </div>
  );
}
