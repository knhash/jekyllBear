---
layout: post
title:  "You want to build a Recommender System in Prod"
subtitle:  "(You haven’t done that before)"
date:   2022-05-05 21:21:21 +0530
tags: [general]
redirect_from:
  - general/recommender-system-in-prod
---
  

```
> be you
> have participated in kaggle recommender system competitions
> datascientist.mp3
> bossman says to recommend stuff for noobs
> because they can’t search properly or whatever
> ok bossman
> no defined problem statement? 
> no csv? 
> no accuracy and mae test suite? 
> no leaderboard?

what do /b/?
```

  

_Haha, noob. Ok let’s do this._



* * *

  

### \> Frame problem statement

You are an adult now. Frame the problem statement yourself. Just ask a bunch of questions and keep reducing scope. If you can visualise the mathematical formulation you have arrived. 

Congratulations. Wasn’t so hard, was it.

  

### \> Build framework

Setup your Jupyter Notebook so you can iterate fast. Build a first model, maybe a random model that spits out random predictions. Is this a good baseline? Don’t ask such stupid questions, it isn’t. But this will help you build an end to end training and testing pipeline. The train-test split, pre-process placeholders, test suite. 

Build now so you don’t need to keep building later. 

  

### \> Establish baseline

You have the problem statement yeah? There is gotta be some stupid simple stuff that is better than random predictions. Yes, heuristics. Pick one, or some. Get test results. Now this is the one to beat. 

  

### \> Metrics and reward function

The very next thing is to establish a good metric of evaluation. Actually this should be the second point of order. But we are here, better late than later I guess.

This is going to be your leaderboard basically. And it should correlate _highly_ with whatever problem statement you are solving for. Take some time here. 

At least 2 hours. Minimum.

  

### \> Simple algorithms first

Or SAF for short. Heard of Multi Armed Bandits? Try that first. Shit’s amazing. Probably all that you’ll need.

  

* * *

_With me so far?_ 

_All this was within Jupyter. But predictions happen in the world outside, so we got stuff to do. Strap in. We are going outside._

* * *

  

### \> Prediction Service setup

How you gonna do the predictions huh? You need an API or some shit. Setup a dummy service that takes in request (a user id maybe) and responds with predictions. 

Find something that works with python scripts. Why? Because it is easy to convert a Jupyter Notebook to an executable script but what do I know, write in Cython for all I care. 

But code well. Classes and shit. You are in production environment now. Act like it.

  

### \> Feature store (low latency cache)

A lot of concurrent requests (QPS) and low latency requests means optimisations. Use caches and feature stores to save model weights and intermediate products. CosmosDB, Aerospike, just pick one and run with it. You know how dictionary look-ups are very fast? Same concept. Prefer lookups to on-demand processing.

Keep the actual prediction service is as light as possible. Maybe it just does a dot product of vectors. Maybe you found out about ONNX runtimes and used that. 

Good job!

  

### \> Logs, health metrics and alerting

Stuff breaks. Production stuff breaks hard. You need to know when it breaks. Log stuff. Model health, pre-processing data health, maybe every request and response (RRLogs). Actually, definitely do that. ELK, Kibana, or some such crap. Then setup alerts on it. So when a bunch of predictions are throwing NULLs you will be on top of it in 1 hour rather than the product folks telling you about it after 3 days.

While you are at it also set up some alerting on the infrastructure. Running at 95% memory capacity or 5% CPU capacity, both are bad. Or your Celery queue is choked to the end of times. Bad.

Keep your eyes on those numbers. Better, push those numbers (Prometheus) to a dashboard (Grafana) and set up alerts (PagerDuty). 

Rest those eyes until needed.

  

### \> Performance metrics

Fancy graphs that product people see to judge how good your recommender system is working. Should contain your model performance metrics and related product metrics (Retention, Engagement, Churn, what have you). Dunno what to use? Use Metabase. If someone asks why just say I told you to.

If you build this to be sufficiently standalone so all your future models can plug into it, well done, you are a good engineer.

  

### \> Model re-training and pipelines

Models get stale. Underlying data may no longer be relevant. You gotta re-train your models. Automate that shit. 

Airflow will let you schedule tasks and dependencies in what it calls DAGs. Which are just Graphs which have a particular Direction and are Acyclic. Use them. It is fancy cron and you can do some fancy cron stuff with it. 

  

* * *

  

_Congratulations. Your recommender system is now in production._ 

_Soon “people” will come to you with suggestions and ideas on how to make recommendations better. They will say it is a small change, let us see how it performs._ 

_Now you are thinking about an experimentation framework. Hypothesis testing. Model Controller._

_Until then..._